import { Task } from "@/app";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

interface TaskItemProps {
  item: Task;
  handleEdit: (item: Task) => void;
  handleDelete: (id: number) => void;
}

const TaskItem: FC<TaskItemProps> = React.memo(
  ({ item, handleEdit, handleDelete }) => {
    return (
      <View style={styles.task}>
        <Text style={styles.taskText}>{item.title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <Icon name="edit" color="#4caf50">
              編集
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Icon name="delete" color="#f44336">
              削除
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

export default TaskItem;

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
  taskText: {
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
