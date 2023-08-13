import { Navigate } from "react-router-dom";
import useUser from "../apis/get/useUser";
import { pageBlock } from "../state/pageBlockState";

const withAuth =
  (WrappedComponent, { block }) =>
  () => {
    const { user, isLoading } = useUser();
    if (isLoading) {
      return null;
    }
    if (block === pageBlock.UNAUTHENTICATED) {
      if (!user.isUser) {
        alert("로그인이 필요합니다.");
        return <Navigate to="/login" />;
      }
    }

    if (block === pageBlock.ACTIVATED) {
      if (user.isUser) {
        return <Navigate to="/" />;
      }
    }

    return <WrappedComponent />;
  };

export default withAuth;
