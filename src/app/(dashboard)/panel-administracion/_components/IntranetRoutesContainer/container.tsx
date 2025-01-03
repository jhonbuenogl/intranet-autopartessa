"use client";

import React, { useState } from "react";
import IntranetRoutes from "../IntranetRoutes/intranetRoutes";
import { User } from "@prisma/client";
import { RoutePermissionInterface } from "@/lib/utils";
import { SidebarMenu } from "@/components/ui/sidebar";

interface Props {
  user: User | null;
}

const IntranetRoutesContainer = ({ user }: Props) => {
  const [userRoutePermissions, setUserRoutePermissions] = useState<
    RoutePermissionInterface[]
  >(user?.routePermissions ? JSON.parse(user?.routePermissions) : []);

  return (
    <>
      {userRoutePermissions.map((item, index: number) => (
        <SidebarMenu key={index}>
          <IntranetRoutes
            userRoutePermissions={userRoutePermissions}
            setUserRoutePermissions={setUserRoutePermissions}
            item={item}
          />
        </SidebarMenu>
      ))}
    </>
  );
};

export default IntranetRoutesContainer;
