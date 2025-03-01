import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const router = Router();

// if I want that a user that's logged out, can't see the albums put the protected function

router.get('/', getAllAlbums)
router.get('/:albumId', getAlbumById)

export default router