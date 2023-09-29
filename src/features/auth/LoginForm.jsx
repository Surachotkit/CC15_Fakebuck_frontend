import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

export default function LoginForm() {
  // ผูกกับ component byding
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });


  return (
    <form className="grid gap-4">
      <LoginInput
        placeholder="Email address or phone number"
        value={input.emailOrMobile}
        onChange={e => setInput({...input, emailOrMobile: e.target.value })}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={input.password}
        onChange={e => setInput({...input, password: e.target.value})}
      />
      <LoginButton />
    </form>
  );
}
