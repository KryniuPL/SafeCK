package com.idea.kielce.hackathon.stay_null_safe.SafeCK

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.models.User
import com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
@EnableJpaRepositories(basePackages = ["com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories"])
@Configuration
class SafeCkApplication{
    @Bean
    fun init(repository: UserRepository) = CommandLineRunner {
        repository.save(User(username = "Jack", password =  "Bauer"))
        repository.save(User(username = "Chloe", password =  "O'Brian"))
        repository.save(User(username = "Kim", password =  "Bauer"))
        repository.save(User(username = "David", password =  "Palmer"))
        repository.save(User(username = "Michelle", password =  "Dessler"))
    }
}

fun main(args: Array<String>) {
    runApplication<SafeCkApplication>(*args)
    print("tests")
}
