package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.enums.Statuses
import javax.persistence.*

@Entity
data class Alert (
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var Id: Long = 0,
        var text: String = "",
        @ManyToOne
        var owner: User,
        @OneToOne
        var category: Category,
        var status: Statuses = Statuses.ACTIVE

)