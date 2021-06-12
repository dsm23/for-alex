import type { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { Button, Small, TextField } from "../../components";
import { useAuth } from "../../contexts/AuthContext";

import styles from "./styles.module.css";

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

const NewPassword: FunctionComponent = () => {
  const history = useHistory();
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Values>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleResetClick = () => {
    reset();
  };

  const onSubmit = (data: Values) => {
    auth.changePassword(data.newPassword)(() => {
      history.push("/");
    });
  };

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
      <ErrorMessage
        errors={errors}
        name="oldPassword"
        render={({ message }) => (
          <Small id="old-password-helper">{message}</Small>
        )}
      />
      <TextField
        id="newPassword"
        sectionClasses="mt-2"
        type="password"
        label="New Password"
        {...register("newPassword")}
        aria-controls="new-password-helper"
        aria-describedby="new-password-helper"
      />
      <ErrorMessage
        errors={errors}
        name="newPassword"
        render={({ message }) => (
          <Small id="new-password-helper">{message}</Small>
        )}
      />
      <TextField
        id="confirmPassword"
        sectionClasses="mt-2"
        type="password"
        label="Confirm Password"
        {...register("confirmPassword")}
        aria-controls="confirm-password-helper"
        aria-describedby="confirm-password-helper"
      />

      <ErrorMessage
        errors={errors}
        name="confirmPassword"
        render={({ message }) => (
          <Small id="confirm-password-helper">{message}</Small>
        )}
      />
      <div className={styles.buttonContainer}>
        <Button variant="light" type="button" onClick={handleResetClick}>
          Reset
        </Button>
        <Button className="ml-2" type="submit">
          Submit
        </Button>
      </div>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
};

export default NewPassword;
