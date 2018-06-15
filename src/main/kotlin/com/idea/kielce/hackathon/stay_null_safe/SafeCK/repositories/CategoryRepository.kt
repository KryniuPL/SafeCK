package com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.models.Category
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository: JpaRepository<Category, Long> {
}