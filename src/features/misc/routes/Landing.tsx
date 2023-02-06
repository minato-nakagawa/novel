import React, { useEffect, useState } from "react";
import { useAuth } from "@/features/auth";

export const Landing = () => {
  const { isAuthenticated, user } = useAuth();
  return <div>{isAuthenticated}</div>;
};
