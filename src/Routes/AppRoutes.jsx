import { Routes, Route } from "react-router-dom"
import React from "react"

import HomePage from "../pages/HomePage/HomePage"
import DestinationsPage from "../pages/DestinationsPage/DestinationsPage"
import ThemesPage from "../pages/ThemesPage/ThemesPage"
import LogInPage from "../pages/LogInPage/LogInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"
import PrivateRoutes from "./PrivateRoutes"
import EditUserProfilePage from "../pages/EditUserProfilePage/EditUserProfilePage"
import NewTravelFormPage from "../pages/NewTravelFormPage/NewTravelFormPage"

const AppRoutes = () => {

    return (


        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/themes" element={<ThemesPage />} />
            {/* <Route path="/reviews" element={<ReviewsPage />} /> */}

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />

            {/*<Route element={<PrivateRoutes/>}> */}
            <Route path="/users/:userId" element={<UserProfilePage />} />
            <Route path="/users/edit/:userId" element={<EditUserProfilePage />} />
            {/* <Route path="/admin-profile" element={<AdminProfilePage />} />
            </Route> */}

            

            <Route path="/admin-profile/create-travel" element={<NewTravelFormPage />} />


            {/* <Route path="*" element={<NotFoundPage />} /> */}

        </Routes>

    )
}

export default AppRoutes