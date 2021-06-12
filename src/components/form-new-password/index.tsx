import type { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Small from "../small";
import TextField from "../text-field";

type Values = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  oldPassword: yup.string().required("enter your old password"),
  newPassword: yup
    .string()
    .min(10, "new password must be at least 10 characters")
    .required("enter your new password"),
  confirmPassword: yup
    .string()
    .required("enter your new password again")
    .oneOf([yup.ref("newPassword"), null], "passwords do not match"),
});

const FormNewPassword: FunctionComponent = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Values) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="oldPassword"
        type="password"
        label="Old Password"
        {...register("oldPassword")}
        aria-controls="old-password-helper"
        aria-describedby="old-password-helper"
      />
      {errors.oldPassword && (
        <Small id="old-password-helper">{errors.oldPassword}</Small>
      )}
      <TextField
        id="newPassword"
        type="password"
        label="New Password"
        {...register("newPassword")}
        aria-controls="new-password-helper"
        aria-describedby="new-password-helper"
      />
      {errors.newPassword && (
        <Small id="new-password-helper">{errors.newPassword}</Small>
      )}
      <TextField
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        {...register("confirmPassword")}
        aria-controls="confirm-password-helper"
        aria-describedby="confirm-password-helper"
      />
      {errors.confirmPassword && (
        <Small id="confirm-password-helper">{errors.confirmPassword}</Small>
      )}
    </form>
  );
};

export default FormNewPassword;
