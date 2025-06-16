export class StatusController {
  async handle(
    req: import("express").Request,
    res: import("express").Response
  ) {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 100) * 1000)
    );
    res.send({
      status: "OK",
    });
    return;
  }
}
