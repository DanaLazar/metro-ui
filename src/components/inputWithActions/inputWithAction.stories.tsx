import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputWithAction } from "@/components/inputWithActions/inputWithAction";
import { FormField } from "@/components/formField/formField";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";

const meta: Meta<typeof InputWithAction> = {
  title: "Components/inputWithAction",
  component: InputWithAction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleAction: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <InputWithAction>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          id="single-action-input"
        />
        <Button onClick={() => alert(value)}>Search</Button>
      </InputWithAction>
    );
  },
};

export const WithFormField: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleSearch = () => {
      if (!value) {
        setError("Field is required");
      } else {
        setError("");
      }
    };

    return (
      <FormField label="Search" error={error} id="with-form-field-input">
        <InputWithAction>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id="with-form-field-input"
          />
          <Button onClick={handleSearch}>Search</Button>
        </InputWithAction>
      </FormField>
    );
  },
};

export const Confirmation: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleConfirm = () => {
      if (value !== "DELETE") {
        setError("You must type DELETE");
      } else {
        setError("");
      }
    };

    return (
      <FormField
        label="Type DELETE to confirm"
        error={error}
        id="confirmation-input"
      >
        <InputWithAction>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id="confirmation-input"
          />

          <Button variant="secondary" onClick={() => setValue("")}>
            Cancel
          </Button>

          <Button variant="danger" onClick={handleConfirm}>
            Delete
          </Button>
        </InputWithAction>
      </FormField>
    );
  },
};

export const LoadingAction: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };

    return (
      <InputWithAction>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="loading-action-input"
        />
        <Button isLoading={loading} onClick={handleClick}>
          Submit
        </Button>
      </InputWithAction>
    );
  },
};
