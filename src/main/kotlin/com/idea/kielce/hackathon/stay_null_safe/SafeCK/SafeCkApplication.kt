package com.idea.kielce.hackathon.stay_null_safe.SafeCK

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
@EnableJpaRepositories(basePackages = ["com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories"])
@Configuration
class SafeCkApplication

fun main(args: Array<String>) {
    runApplication<SafeCkApplication>(*args)
    print("tests")
}
