package com.example.Todolist.Dtos;

import jakarta.annotation.Nullable;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.springframework.validation.annotation.Validated;

@Data
public class StudentDto {

    @NotBlank(message = "firstName is required")
    @NotEmpty(message = "firstname has to be contain some values")
    public String firstName;

    @NotEmpty(message = "lastname could not be empty")
    public String lastName;

    @NotNull(message = "class cannot be null")
    @Min(value = 1,message = "minimum value is 1")
    @Max(value = 10,message = "maximum value is 10")
    public Integer classStudent;

    @NotEmpty(message = "section cannot be empty")
    public String section;

    @NotEmpty(message = "bloodgroup cannot be empty")
    public String bloodGroup;
}
