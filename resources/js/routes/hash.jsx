import { createHashRouter } from "react-router-dom";
import AddFriend from "../overlay-pages/AddFriend";

const HashRouter = createHashRouter([
    {
        path: '/',
        element: <></>,
    },
    {
        path: 'Add-friend',
        element: <AddFriend />
    }
]);

export default HashRouter;
