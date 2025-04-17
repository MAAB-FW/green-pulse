import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Button(): React.ReactNode {
  const router = useRouter();
  const { name, email } = useSelector((state: RootState) => state.userSlice);

  const redirect = (): void => {
    if (!name || !email) {
      toast.error("Please log in to donate.");
      return;
    }
    router.push("/donate/payment");
  };

  return (
    <button
      onClick={redirect}
      className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
    >
      Donate Now
    </button>
  );
}
