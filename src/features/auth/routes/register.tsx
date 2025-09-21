import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useMutation} from "@tanstack/react-query";
import {register} from "@/features/auth/api/register.ts";
import {useState} from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {toast} from "sonner";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [accountType, setAccountType] = useState("farmer");

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success("Conta criada com sucesso", {
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
    <Card className="w-full max-w-sm m-auto mt-10 mb-10">
      <CardHeader>
        <CardTitle className="m-auto">Crie sua conta para começar a usar</CardTitle>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate({
            email, name, password, city, phone, street, accountType
          });
        }}>
        <CardContent>

          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                type="nome"
                placeholder=""
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              <Label htmlFor="email">Telefone</Label>
              <Input
                id="number"
                type="number"
                placeholder="28999999999"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rua">Rua</Label>
              <Input
                id="rua"
                type="string"
                placeholder="28999999999"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="estado">Estado</Label>
              <Input
                id="estado"
                type="string"
                placeholder="28999999999"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                type="string"
                placeholder="28999999999"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}

              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="ConfirmPassword">Confirmar senha</Label>
              </div>
              <Input id="ConfirmPassword" type="password" required/>
            </div>
            <Select value={accountType} onValueChange={setAccountType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo de conta"/>
              </SelectTrigger>
              <SelectContent side="bottom">
                <SelectGroup>
                  <SelectLabel>Contas</SelectLabel>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

        </CardContent>
        <CardFooter className="flex-col gap-2 mt-5">
          <Button type="submit" className="w-full"
                  disabled={mutation.isPending}>
            {mutation.isPending ? "Criando..." : "Criar conta"}
          </Button>
          <Button variant="outline" className="w-full">
            Continue com Google
          </Button>
        </CardFooter>
      </form>
    </Card>

  );
}
