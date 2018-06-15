package com.idea.kielce.hackathon.stay_null_safe.SafeCK.controllers

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories.AlertRepository
import com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/authentication")
class AuthenticationRestController {

    @Autowired
    internal lateinit var userRepository: UserRepository

    @GetMapping
    fun authenticate(): ResponseEntity<HttpStatus> {

        
        return ResponseEntity(HttpStatus.FORBIDDEN)
    }




}