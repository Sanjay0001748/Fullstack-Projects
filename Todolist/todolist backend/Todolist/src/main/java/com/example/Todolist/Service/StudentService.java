package com.example.Todolist.Service;

import com.example.Todolist.Dtos.ResponseDto;
import com.example.Todolist.Dtos.StudentDto;
import com.example.Todolist.Entity.Student;
import com.example.Todolist.Repository.StudentRepo;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public @Nullable ResponseDto addStudent(StudentDto studentDto) {
        Student student=Student.builder()
                .firstName(studentDto.getFirstName())
                .lastName(studentDto.getLastName())
                .classStudent(studentDto.getClassStudent())
                .section(studentDto.getSection())
                .bloodGroup(studentDto.getBloodGroup())
                .build();
        studentRepo.save(student);
        ResponseDto responseDto=new ResponseDto();
        responseDto.setSuccess(true);
        responseDto.setData("student added successfully");
        return responseDto;

    }

    public @Nullable ResponseDto getAllStudents() {
        List<Student> studentList=studentRepo.findAll();
        ResponseDto responseDto=new ResponseDto();
        responseDto.setSuccess(true);
        responseDto.setData(studentList);
        return responseDto;
    }

    public @Nullable ResponseDto deleteStudent(int sid) {
        ResponseDto responseDto=new ResponseDto();
        studentRepo.deleteById(sid);
        responseDto.setSuccess(true);
        responseDto.setData("success");
        return responseDto;
    }
}
