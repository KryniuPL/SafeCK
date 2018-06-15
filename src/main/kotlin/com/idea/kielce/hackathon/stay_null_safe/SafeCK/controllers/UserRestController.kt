package com.idea.kielce.hackathon.stay_null_safe.SafeCK.controllers

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.models.User
import com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/user")
class UserRestController {

    @Autowired
    lateinit var userRepository: UserRepository

    @GetMapping
    fun getUsers(): List<User> = userRepository.findAll()

    @GetMapping("/{id}")
    fun getUser(@PathVariable("id") id: Long): Optional<User> = userRepository.findById(id)

    @PostMapping
    fun createUser(@RequestBody user: User) = userRepository.save(user)

    @DeleteMapping
    fun deleteUser(@RequestBody user: User) = userRepository.delete(user)

}