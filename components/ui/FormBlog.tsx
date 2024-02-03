
import { Editor } from "novel";
import { Button } from "./button";
import { CheckIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label"

export default function FormBlog() {
  return (
    <>
      <div className=" mb-8">
        <Label className="text-lg" htmlFor="title">Title</Label>
        <input type="text" id="title" className="w-full border rounded p-2 mt-4" placeholder="Iuput Me Pls!" />
      </div>
      <div>
        <Label className="text-lg" htmlFor="content">Content</Label>
        <Editor
          editorProps={{

          }}
          defaultValue={''}
          className="pb-8 border rounded mt-4"
          disableLocalStorage

        />
      </div>
      <div className=" items-center justify-end flex mt-4 gap-2">
        <Button className=" bg-black text-white hover:bg-gray-800 hover:text-white rounded"><CheckIcon className="mr-2" />Seve</Button>
        <Button className=" bg-gray-300 text-white hover:bg-black hover:text-white rounded">Cancel</Button>
      </div>
    </>
  );
}