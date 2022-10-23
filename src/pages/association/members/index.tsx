import React from "react"
import UserCard from "../components/UserCard"

export default function AssociationMemberPage() {
    return (
        <div>
            <div>
                <h4>Quan tri vien</h4>
                <ul className="flex flex-row">
                    <li>
                        <UserCard />
                    </li>
                    <li>
                        <UserCard />
                    </li>
                </ul>
            </div>
        </div>
    )
}
