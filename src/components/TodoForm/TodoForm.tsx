import styled from "@emotion/styled";
import Form from "components/Form/Form";
import FormButton from "components/Form/FormButton";
import FormInput from "components/Form/FormInput";
import FormLabel from "components/Form/FormLabel";
import useTodoList from "hooks/useTodoList";
import { ChangeEvent, FormEvent, useState } from "react";

const FormField = styled.div({
  width: "300px",
  display: "flex",
  gap: ".25em",
  flexDirection: "column",
});

type FormState = {
  text: string;
  description: string;
};

const EMPTY_FORM_STATE: FormState = {
  text: "",
  description: "",
};

export default function TodoForm() {
  const { addTask } = useTodoList();
  const [formState, setFormState] = useState<FormState>(EMPTY_FORM_STATE);
  const canSubmit = !!formState.text;

  const resetFormState = () => setFormState(EMPTY_FORM_STATE);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask({ text: formState.text, description: formState.description });
    resetFormState();
  };

  return (
    <Form onSubmit={handleFormSubmit} data-cy="task-form">
      <h1>Ajouter une nouvelle tâche</h1>
      <FormField>
        <FormLabel required>Tâche</FormLabel>
        <FormInput
          name="text"
          placeholder="Votre tâche à effectuer"
          onChange={handleInputChange}
          value={formState.text}
          data-cy="task-input"
        />
      </FormField>
      <FormField>
        <FormLabel>Description</FormLabel>
        <FormInput
          placeholder="Description de votre tâche"
          name="description"
          onChange={handleInputChange}
          value={formState.description}
        />
      </FormField>
      <FormButton disabled={!canSubmit} data-cy="add-task-btn">
        Créer
      </FormButton>
    </Form>
  );
}
