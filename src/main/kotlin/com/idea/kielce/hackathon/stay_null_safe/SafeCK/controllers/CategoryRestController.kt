package com.idea.kielce.hackathon.stay_null_safe.SafeCK.controllers

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.models.Category
import com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories.CategoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/category")
class CategoryRestController {

    @Autowired
    internal lateinit var categoryRepository: CategoryRepository

    @GetMapping
    fun getCategories(): List<Category> = categoryRepository.findAll()

    @PostMapping
    fun createAlert(@RequestBody category: Category): Category = categoryRepository.save(category)

}