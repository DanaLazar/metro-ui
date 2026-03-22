import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./modal";
import { InputWithAction } from "../input/InputWithAction";
import { Button } from "../button/button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A modal dialog component for displaying content in an overlay.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is visible",
    },
    title: {
      control: "text",
      description: "The title displayed in the modal header",
    },
    onClose: {
      action: "closed",
      description: "Callback when the modal close button is clicked",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SaveModal: Story = {
  args: {
    isOpen: true,
    title: "Salvează Expresia",
    onClose: () => console.log("Modal closed"),
    children: <></>,
    actions: <></>,
  },
  render: (args) => {
    const [label, setLabel] = useState("");

    return (
      <Modal
        {...args}
        actions={
          <>
            <Button variant="secondary" onClick={args.onClose}>
              Anulează
            </Button>
            <Button variant="primary">Salvează</Button>
          </>
        }
      >
        <div>
          <p>Expresia:</p>
          <strong>655555555666558 ÷ 9 = 72839506185173.11</strong>
        </div>

        <InputWithAction
          value={label}
          onChange={setLabel}
          placeholder="Introduceți o etichetă..."
          showButtons={false}
        />
      </Modal>
    );
  },
};

export const ClearModal: Story = {
  args: {
    isOpen: true,
    title: "Confirmă Ștergerea",
    onClose: () => console.log("Modal closed"),
    children: <></>,
    actions: <></>,
  },
  render: (args) => (
    <Modal
      {...args}
      actions={
        <>
          <Button variant="secondary" onClick={args.onClose}>
            Anulează
          </Button>
          <Button variant="danger">Șterge</Button>
        </>
      }
    >
      <p>Sigur doriți să ștergeți calculatorul?</p>
    </Modal>
  ),
};
