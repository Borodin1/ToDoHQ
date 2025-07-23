import { Button, Input } from "../../shared/components";
import { useSettingsForm } from './useSettingsForm';


export const SettingsForm: React.FC = () => {
   const { register, handleSubmit,onSubmit } = useSettingsForm();
  return (
    <form className="border border-zinc-300 p-7 rounded-xl flex flex-col justify-evenly gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('firstName')} type="text" name='firstName'  label="FirstName" />
      <Input {...register('lastName')} type="text" name='lastName'  label="LastName" />
      <Input {...register('username')} type="text" name='username'  label="UserName" />
      <Input {...register('email')} type="text" name='email'  label="Email Address" />
      <Button type="submit" title="Save Changes" />
    </form>
  );
};
