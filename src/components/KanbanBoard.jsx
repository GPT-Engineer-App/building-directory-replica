import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const initialTasks = {
  'todo': [
    { id: '1', content: 'Inspect roof' },
    { id: '2', content: 'Check plumbing' },
  ],
  'in-progress': [
    { id: '3', content: 'Fix broken window' },
  ],
  'done': [
    { id: '4', content: 'Replace light bulbs' },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box display="flex" justifyContent="space-around" p={4}>
        {Object.entries(tasks).map(([columnId, columnTasks]) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                w="30%"
                p={4}
                bg="gray.100"
                borderRadius="md"
              >
                <Heading size="md" mb={4}>
                  {columnId.replace('-', ' ')}
                </Heading>
                <VStack spacing={4}>
                  {columnTasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          p={4}
                          bg="white"
                          borderRadius="md"
                          boxShadow="md"
                          w="100%"
                        >
                          <Text>{task.content}</Text>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </VStack>
              </Box>
            )}
          </Droppable>
        ))}
      </Box>
    </DragDropContext>
  );
};

export default KanbanBoard;