"use client";

import React, { useEffect, useState } from "react";
import IntranetRoutes from "../IntranetRoutes/intranetRoutes";
import { User } from "@prisma/client";
import SavePermissionsButton from "../SavePermissionsButton/button";

interface Props {
  user: User | null;
}

const IntranetRoutesContainer = ({ user }: Props) => {
  const [userRoutePermissions, setUserRoutePermissions] = useState(
    JSON.parse(user?.routePermissions as string)
  );

  useEffect(() => {
    console.log(userRoutePermissions);
  }, [userRoutePermissions]);

  return (
    <div className="py-6 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h3 className="text-base font-medium">Permisos de usuario</h3>

        <div className="flex flex-col gap-5">
          {userRoutePermissions.map((item: any, index: number) => (
            <IntranetRoutes
              setUserRoutePermissions={setUserRoutePermissions}
              key={index}
              item={item}
            />
          ))}
        </div>

        <SavePermissionsButton userRoutePermissions={userRoutePermissions} />
      </div>
    </div>
  );
};

export default IntranetRoutesContainer;