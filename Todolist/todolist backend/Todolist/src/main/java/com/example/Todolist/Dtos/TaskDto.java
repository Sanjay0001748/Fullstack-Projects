package com.example.Todolist.Dtos;

import lombok.Data;
import lombok.NonNull;
import org.springframework.validation.annotation.Validated;

@Data
public class TaskDto {


    public String title;


    public String description;
}
