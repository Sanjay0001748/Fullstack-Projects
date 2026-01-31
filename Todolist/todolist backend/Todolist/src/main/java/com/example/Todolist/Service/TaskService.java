package com.example.Todolist.Service;

import com.example.Todolist.Dtos.ResponseDto;
import com.example.Todolist.Dtos.TaskDto;
import com.example.Todolist.Entity.Task;
import com.example.Todolist.Repository.TaskRepository;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

@Autowired
private TaskRepository taskRepository;
    public @Nullable ResponseDto addTask(TaskDto taskDto) {
        ResponseDto responseDto=new ResponseDto();
        Task task=Task.builder()
                        .title(taskDto.getTitle())
                                .description(taskDto.getDescription())
                                        .build();

        responseDto.setSuccess(true);
        responseDto.setData(taskRepository.save(task));
        return responseDto;
    }

    public @Nullable ResponseDto getAllTasks() {
        List<Task> allTasks=taskRepository.findAll();
        ResponseDto responseDto=new ResponseDto();
        responseDto.setSuccess(true);
        responseDto.setData(allTasks);
        return responseDto;
    }

    public @Nullable ResponseDto updateTask(int taskId, Task task) {
        ResponseDto responseDto=new ResponseDto();
        Task originalTask=taskRepository.findById(taskId).orElseThrow(()->new RuntimeException("No task found for this id"));
        try {


            if (!task.getTitle().isEmpty()) {
                originalTask.setTitle(task.getTitle());

            }
            if (!task.getDescription().isEmpty()) {
                originalTask.setDescription(task.getDescription());
            }
            responseDto.setSuccess(true);
            responseDto.setData(taskRepository.save(originalTask));

        }
        catch(Exception e){
            e.printStackTrace();
        }
        return responseDto;
    }
    public ResponseDto deleteTask(int taskId){
        ResponseDto responseDto=new ResponseDto();
        try{
            taskRepository.deleteById(taskId);
            responseDto.setSuccess(true);
            responseDto.setData("Task deleted successfully");
        }
        catch(Exception e){
            e.printStackTrace();
            responseDto.setSuccess(false);
            responseDto.setData(e.getMessage());
        }
       return responseDto;
    }
}
