import TaskInput from "@/components/taskInput";
import TaskItem from "@/components/taskItem";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export type Task = {
  id: number;
  title: string;
};

export default function Index() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if (isEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === isEditing ? { ...task, title: taskText } : task
        )
      );
      setIsEditing(null);
    } else {
      const newTask: Task = {
        id: tasks.length + 1,
        title: taskText,
      };
      setTasks([...tasks, newTask]);
    }
    setTaskText("");
  };

  const handleDelete = useCallback(
    (id: number) => {
      console.log("delete", id);
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );

  const handleEdit = useCallback((item: Task) => {
    setTaskText(item.title);
    setIsEditing(item.id);
  }, []);

  const renderTask = ({ item }: { item: Task }) => (
    <TaskItem item={item} handleEdit={handleEdit} handleDelete={handleDelete} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        handleSaveTask={handleSaveTask}
        isEditing={isEditing}
      />
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
