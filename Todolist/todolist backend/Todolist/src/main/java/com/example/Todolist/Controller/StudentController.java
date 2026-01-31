package com.example.Todolist.Controller;

import com.example.Todolist.Dtos.ResponseDto;
import com.example.Todolist.Dtos.StudentDto;
import com.example.Todolist.Repository.StudentRepo;
import com.example.Todolist.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/v2/student")
@RestController
@CrossOrigin("http://localhost:4200")
public class StudentController {


    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public ResponseEntity<ResponseDto> addStudent(@Validated @RequestBody  StudentDto studentDto){
        return ResponseEntity.status(HttpStatus.CREATED.value()).body(studentService.addStudent(studentDto));
    }
    @GetMapping("/get")
    public ResponseEntity<ResponseDto> getStudent(){
        return ResponseEntity.ok(studentService.getAllStudents());
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseDto> deleteStudent(@PathVariable int id){
        return ResponseEntity.ok(studentService.deleteStudent(id));
    }
}
