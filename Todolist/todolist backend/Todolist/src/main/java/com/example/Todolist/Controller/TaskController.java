package com.example.Todolist.Controller;

import com.example.Todolist.Dtos.ResponseDto;
import com.example.Todolist.Dtos.TaskDto;
import com.example.Todolist.Entity.Task;
import com.example.Todolist.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v2/task")
@CrossOrigin("http://localhost:4200")
public class TaskController {

    @Autowired
    private TaskService taskService;
    @PostMapping("/add")
    public ResponseEntity<ResponseDto> addTask(@RequestBody @Validated TaskDto taskDto){

        return ResponseEntity.status(HttpStatus.CREATED.value()).body(taskService.addTask(taskDto));
    }
    @GetMapping("/get")
    public ResponseEntity<ResponseDto> getTask(){
        return ResponseEntity.ok(taskService.getAllTasks());
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseDto> updateTask(@PathVariable("id") int taskId, @RequestBody Task task){
        return ResponseEntity.ok(taskService.updateTask(taskId,task));
    }
    @DeleteMapping("/delete/id")
    public ResponseEntity<ResponseDto> deleteTask(@PathVariable("id") int taskId, @RequestBody Task task){
        return ResponseEntity.ok(taskService.deleteTask(taskId));
    }

}
