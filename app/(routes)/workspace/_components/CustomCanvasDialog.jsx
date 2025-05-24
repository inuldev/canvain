import { toast } from "sonner";
import { useMutation } from "convex/react";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { api } from "@/convex/_generated/api";
import { UserDetailContext } from "@/context/UserDetailContext";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function CustomCanvasDialog({ children }) {
  const router = useRouter();
  const [name, setName] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [loading, setLoading] = useState(false);
  const { userDetail } = useContext(UserDetailContext);
  const createDesignRecord = useMutation(api.designs.CreateNewDesign);

  /**
   * Membuat desain baru dan simpan ke database
   */
  const onCreate = async () => {
    toast("Membuat desain baru...");
    setLoading(true);
    const result = await createDesignRecord({
      name: name,
      width: Number(width),
      height: Number(height),
      uid: userDetail?._id,
    });

    setLoading(false);
    router.push("/design/" + result);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buat Desain Baru</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="text-sm">
                Buat desain baru dengan mengisi nama dan ukuran desain yang
                diinginkan
              </h2>
              <div className="mt-5">
                <label>Nama Desain</label>
                <Input
                  placeholder="Nama Desain"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="mt-1 flex gap-5 w-full">
                  <div className="w-full">
                    <label>Lebar</label>
                    <Input
                      className="mt-1"
                      type="number"
                      placeholder={500}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label>Tinggi</label>
                    <Input
                      className="mt-1"
                      type="number"
                      placeholder={500}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  className="w-full"
                  disabled={loading || !name || !width || !height}
                  onClick={onCreate}
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    "Buat Desain"
                  )}
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CustomCanvasDialog;
