"use client"
import { useActionState } from "react";

function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}

export default function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 100);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}