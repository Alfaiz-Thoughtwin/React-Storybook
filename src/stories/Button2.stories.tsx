import { Button } from "../components";

export default {
  title: "UI/Controls/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Red = () => <Button />;
