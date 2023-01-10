import { GetServerSidePropsContext } from "next"
import { Fragment } from "react";
import { PlatformNavbar } from "../../components/PlatformNavbar";

import { getAccess } from "../../services/getAccess";

export default function Index({ name, avatarUrl, power  }) {
  return (
    <Fragment>
      <PlatformNavbar name={name} power={ power } avatarUrl={ avatarUrl } />
    </Fragment>
  )
}


export async function getServerSideProps(context: GetServerSidePropsContext){
  return getAccess(context , "")
}