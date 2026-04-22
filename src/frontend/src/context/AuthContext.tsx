import type { Student } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextValue {
  student: Student | null;
  login: (student: Student) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "westbrook_student";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [student, setStudent] = useState<Student | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Student & {
          grades: Array<{ subject: string; score: string; grade: string }>;
        };
        // Restore BigInt from stored number strings
        return {
          ...parsed,
          grades: parsed.grades.map((g) => ({
            ...g,
            score: BigInt(g.score),
          })),
        };
      }
    } catch {
      // ignore
    }
    return null;
  });

  useEffect(() => {
    if (student) {
      // Serialize BigInt safely
      const serializable = {
        ...student,
        grades: student.grades.map((g) => ({
          ...g,
          score: g.score.toString(),
        })),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [student]);

  function login(s: Student) {
    setStudent(s);
  }

  function logout() {
    setStudent(null);
  }

  return (
    <AuthContext.Provider
      value={{ student, login, logout, isAuthenticated: !!student }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
