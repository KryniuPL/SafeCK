package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Status(
        @Id @GeneratedValue
        val id: Long? = null,
        val  statusName: String = ""
)