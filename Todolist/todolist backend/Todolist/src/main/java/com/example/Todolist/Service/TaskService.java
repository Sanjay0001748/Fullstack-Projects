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
}
