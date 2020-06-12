interface Context {
  data: { [x: string]: any };
}

interface Template {
  template: (ctx: Context) => string | Promise<string>
  data?: () => any | Promise<any>
}

async function render(renderTemplate: Template) {
  const {
    template = () => ``,
    data = () => ({})
  } = renderTemplate

  const ctx = {
    data: await data(),
  }

  return template(ctx)
}

export { render }