package com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.models.Alert
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AlertRepository: JpaRepository<Alert, Long> {
}