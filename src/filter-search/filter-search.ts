import { Injectable } from '@nestjs/common';

@Injectable()
export class FilterSearch {
  search(keyWord: string, listToSearch: string[]) {
    const elementsWithKeyWord = listToSearch.filter((listElement) =>
      this.includes(listElement, keyWord),
    );
    if (elementsWithKeyWord.length > 0) {
      return elementsWithKeyWord;
    } else {
      throw new Error(
        'No elements in collection containing expected key word.',
      );
    }
  }

  private includes(listElement: string, keyWord: string): unknown {
    return listElement.includes(keyWord);
  }
}
