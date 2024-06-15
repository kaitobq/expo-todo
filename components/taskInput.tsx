import React, { FC } from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

interface TaskInputProps {
  taskText: string;
  setTaskText: (text: string) => void;
  handleSaveTask: () => void;
  isEditing: number | null;
}

const TaskInput: FC<TaskInputProps> = ({
  taskText,
  setTaskText,
  handleSaveTask,
  isEditing,
}) => {
  return (
    <>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>{isEditing ? "編集" : "追加"}</Text>
      </TouchableOpacity>
    </>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccceee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
