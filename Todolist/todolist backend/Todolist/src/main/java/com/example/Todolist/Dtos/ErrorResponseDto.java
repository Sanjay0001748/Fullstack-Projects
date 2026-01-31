package com.example.Todolist.Dtos;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ErrorResponseDto {

    public String message;

    public Integer statusCode;

    public LocalDateTime localDateTime;
}
