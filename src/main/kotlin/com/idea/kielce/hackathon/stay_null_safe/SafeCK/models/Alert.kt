package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.enums.Statuses
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Alert (
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var Id: Long = 0,
        var text: String = "",


        var owner: User,

        var category: Category,
        var status: Statuses = Statuses.ACTIVE

)