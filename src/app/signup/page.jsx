"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from "@heroui/react";
import { Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const RegisterPage = () => {

  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const user = Object.fromEntries(formData.entries());


    const {data, error} = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });


    if (data) {
  toast.success("Account created successfully!");
  router.push("/");
}

if (error) {
  toast.error(error.message);
}

  };
  

    return (
        <div className="max-w-7xl mx-auto mt-4">
            <Card className="border rounded-none">
                <div className="text-center my-3">
                    <h1 className="text-center font-bold text-xl">Create Account</h1>
                <p>Create an account to book quiet study spaces.</p>
                </div>

                <Form  onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >


        <TextField
        isRequired
        name="name"
        type="name"
      >
        <Label>Name</Label>
        <Input placeholder="Type Your Name" />
        <FieldError />
      </TextField>
        <TextField
        isRequired
        name="image"
        type="url"
      >
        <Label>Image</Label>
        <Input placeholder="Type Valid Image URL" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="mt-6 flex items-center justify-between">
        <Button  type="submit">
          <Check />
          Create
        </Button>
        <Button  type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
          <div>
            <Button className={'w-full'}>Sign In With Google</Button>
          </div>
            </Card>
        </div>
    );
};

export default RegisterPage;