"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
  } from "@/components/ui/breadcrumb"


import withAuth from "@/app/auth/withAuth";

const Dashboard = () => {
  return (
    


        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Tableau de bord</h1>
          </div>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Tableau de bord</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>






          {/* Peut être utile */}
          {/* <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            
          </div> */}
        </main>




      
  )
}

export default withAuth(Dashboard);

