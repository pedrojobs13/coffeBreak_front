import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {login} from "@/features/auth/api/login.ts";
import {Link} from "@tanstack/react-router";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Login feito com sucesso", {
        className: "bg-card text-card-foreground border-border"
      })
    },
    onError: (error) => {
      toast.error("" + error.message, {
        className: "bg-card text-card-foreground border-border"
      })
    },
  });
  return (
    <Card className="w-full max-w-sm m-auto mt-10">
      <CardHeader>
        <CardTitle>Entre com sua conta</CardTitle>
        <CardDescription>Entre com seu email e senha para acessar sua conta</CardDescription>
        <CardAction><Button variant="link"> <Link to="/register">Criar conta</Link> </Button></CardAction>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate({
            email, password
          });
        }}>

        <CardContent className="mb-6">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)}
                     value={password}/>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            {mutation.isPending ? "Entrando..." : "Login"}
          </Button>
          <Button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200">
            Continue com Google
          </Button>
          <Button className="w-full bg-sky-700 hover:bg-sky-600 text-gray-200">
            Continue com Facebook
          </Button>
        </CardFooter>

      </form>
    </Card>
  );
}
