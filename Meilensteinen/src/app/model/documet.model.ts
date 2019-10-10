export interface IDocument {
  link: string;
  title: string;
  type: string;
}

export class DocumentImpl implements IDocument {
  link: string;
  title: string;
  type: string;

  constructor(link: string, title: string, imageUrl: string) {
    this.link = link;
    this.title = title;
    this.type = imageUrl;
  }

  getLink() {
   return this.link;
  }

  getTitle() {
   return this.title;
  }

  getType() {
    return this.type;
  }
}
